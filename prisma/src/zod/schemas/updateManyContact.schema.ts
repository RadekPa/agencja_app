import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ContactUpdateManyMutationInputObjectSchema as ContactUpdateManyMutationInputObjectSchema } from './objects/ContactUpdateManyMutationInput.schema';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './objects/ContactWhereInput.schema';

export const ContactUpdateManySchema: z.ZodType<Prisma.ContactUpdateManyArgs> = z.object({ data: ContactUpdateManyMutationInputObjectSchema, where: ContactWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ContactUpdateManyArgs>;

export const ContactUpdateManyZodSchema = z.object({ data: ContactUpdateManyMutationInputObjectSchema, where: ContactWhereInputObjectSchema.optional() }).strict();