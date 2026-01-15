import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactIncludeObjectSchema as ContactIncludeObjectSchema } from './objects/ContactInclude.schema';
import { ContactOrderByWithRelationInputObjectSchema as ContactOrderByWithRelationInputObjectSchema } from './objects/ContactOrderByWithRelationInput.schema';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './objects/ContactWhereUniqueInput.schema';
import { ContactScalarFieldEnumSchema } from './enums/ContactScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ContactFindFirstSelectSchema: z.ZodType<Prisma.ContactSelect> = z.object({
    id: z.boolean().optional(),
    phoneNumber: z.boolean().optional(),
    firstName: z.boolean().optional(),
    middleName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    informal: z.boolean().optional(),
    fax: z.boolean().optional(),
    email: z.boolean().optional(),
    userMod: z.boolean().optional(),
    dateMod: z.boolean().optional(),
    contactPosition: z.boolean().optional(),
    accountant: z.boolean().optional(),
    tblCustContacts: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ContactSelect>;

export const ContactFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    phoneNumber: z.boolean().optional(),
    firstName: z.boolean().optional(),
    middleName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    informal: z.boolean().optional(),
    fax: z.boolean().optional(),
    email: z.boolean().optional(),
    userMod: z.boolean().optional(),
    dateMod: z.boolean().optional(),
    contactPosition: z.boolean().optional(),
    accountant: z.boolean().optional(),
    tblCustContacts: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ContactFindFirstSchema: z.ZodType<Prisma.ContactFindFirstArgs> = z.object({ select: ContactFindFirstSelectSchema.optional(), include: z.lazy(() => ContactIncludeObjectSchema.optional()), orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContactScalarFieldEnumSchema, ContactScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ContactFindFirstArgs>;

export const ContactFindFirstZodSchema = z.object({ select: ContactFindFirstSelectSchema.optional(), include: z.lazy(() => ContactIncludeObjectSchema.optional()), orderBy: z.union([ContactOrderByWithRelationInputObjectSchema, ContactOrderByWithRelationInputObjectSchema.array()]).optional(), where: ContactWhereInputObjectSchema.optional(), cursor: ContactWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ContactScalarFieldEnumSchema, ContactScalarFieldEnumSchema.array()]).optional() }).strict();