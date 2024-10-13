import brilexAd from "../assets/brilex-sec.png"
import { useForm } from "react-hook-form";
import { Button } from "./ui/Button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/FormHook";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./ui/Select"
import { Input } from "./ui/Input";
import { Textarea } from "./ui/TextArea";
import wilayas from '../data/wilayas.json'
import 'react-toastify/dist/ReactToastify.css';
import BrilexDetails from "./ui/BrilexDetails";

const messageTypes = ['Demande de facture', "Demmande Information", "Service commercial", "Approvisionement", "Ressources Humaines", "Autre"]


export default function ContactForm() {
    const form = useForm({
        defaultValues: {
            username: "",
            email: "",
            wilaya: "",
            'Type de message': "",
            'Votre message': "",
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <section className="w-full bg-[#DBE2EF] py-6 flex-col  px-16 max-md:px-8 max-w-[1580px]">
            <div className=" mx-auto text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#112D4E] to-[#3F72AF]">Contactez nous</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1a3658] to-[#679cdd]"></span>
                </h1>
                <p className="text-[18px] text-[#112D4E] ">
                    Avez-vous des questions? N'hésitez pas à nous contacter directement. Notre équipe reviendra vers vous dans une question d'heures pour vous aider.
                </p>
            </div>
            <div className="flex max-md:flex-col justify-center pb-7 gap-10 items-start">
                <div className='w-[90%] max-md:w-full'>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="flex w-full justify-between items-center max-md:flex-col text-[#112D4E] max-md:gap-4">
                                <FormField
                                    control={form.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem className='w-[45%] max-md:w-full'>
                                            <FormLabel>Votre Nom *</FormLabel>
                                            <FormControl className='bg-[#112D4E]'>
                                                <Input placeholder="Jhone deen" className='bg-[#112D4E] text-[#F9F7F7]' required {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className='w-[45%]  max-md:w-full'>
                                            <FormLabel>Votre email</FormLabel>
                                            <FormControl className='bg-[#112D4E] text-[#F9F7F7] '>
                                                <Input
                                                    placeholder="jhone12@gmail.com"
                                                    type="email" required {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display email.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="flex w-full justify-between max-md:flex-col  text-[#112D4E]max-md:gap-4">
                                <FormField
                                    control={form.control}
                                    name="wilaya"
                                    render={({ field }) => (
                                        <FormItem className='w-[45%] max-md:w-[85%]'>
                                            <FormLabel>Votre Wilaya</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger className=" bg-[#112D4E] text-[#F9F7F7]">
                                                        <SelectValue placeholder="Jijel" />
                                                    </SelectTrigger>
                                                    <SelectContent className='max-h-72 bg-[#112D4E] overflow-y-scroll scroll-smooth'>
                                                        {wilayas.map(wilaya => (
                                                            <SelectItem
                                                                className='text-[#F9F7F7]'
                                                                key={wilaya.code}
                                                                value={wilaya.name}
                                                            >
                                                                {wilaya.code}-{wilaya.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormDescription>
                                                Select your wilaya.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="Type de message"
                                    render={({ field }) => (
                                        <FormItem className='w-[45%] max-md:w-[85%]'>
                                            <FormLabel>Type de message *</FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <SelectTrigger className=" bg-[#112D4E] text-[#F9F7F7]">
                                                        <SelectValue placeholder="Demande de facture" />
                                                    </SelectTrigger>
                                                    <SelectContent className='max-h-72 bg-[#112D4E] overflow-y-scroll scroll-smooth'>
                                                        {messageTypes.map((msg, i) => (
                                                            <SelectItem
                                                                className='text-[#F9F7F7]'
                                                                key={i}
                                                                value={msg}
                                                            >
                                                                {msg}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormDescription>
                                                Select votre sujet.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="text-[#112D4E]">
                                <FormField
                                    control={form.control}
                                    name="Votre message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Votre message</FormLabel>
                                            <FormControl className='bg-[#112D4E] text-[#F9F7F7]'>
                                                <Textarea placeholder="..." type="text" required {...field} />
                                            </FormControl>
                                            <FormDescription>
                                                This is your public display email.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <div className="max-md:flex max-md:justify-center">
                                <Button
                                    className='bg-[#112D4E] max-md:w-[60%] text-[#F9F7F7] hover:scale-105 duration-300'
                                    type="submit">
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
                <div>
                    <img src={brilexAd} alt="brilexAd" />
                </div>
            </div>
            <BrilexDetails/>
        </section>
    );
}

