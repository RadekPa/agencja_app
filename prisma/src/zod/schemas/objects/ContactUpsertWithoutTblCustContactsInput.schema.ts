import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactUpdateWithoutTblCustContactsInputObjectSchema as ContactUpdateWithoutTblCustContactsInputObjectSchema } from './ContactUpdateWithoutTblCustContactsInput.schema';
import { ContactUncheckedUpdateWithoutTblCustContactsInputObjectSchema as ContactUncheckedUpdateWithoutTblCustContactsInputObjectSchema } from './ContactUncheckedUpdateWithoutTblCustContactsInput.schema';
import { ContactCreateWithoutTblCustContactsInputObjectSchema as ContactCreateWithoutTblCustContactsInputObjectSchema } from './ContactCreateWithoutTblCustContactsInput.schema';
import { ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema as ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './ContactUncheckedCreateWithoutTblCustContactsInput.schema';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './ContactWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ContactUpdateWithoutTblCustContactsInputObjectSchema), z.lazy(() => ContactUncheckedUpdateWithoutTblCustContactsInputObjectSchema)]),
  create: z.union([z.lazy(() => ContactCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema)]),
  where: z.lazy(() => ContactWhereInputObjectSchema).optional()
}).strict();
export const ContactUpsertWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.ContactUpsertWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpsertWithoutTblCustContactsInput>;
export const ContactUpsertWithoutTblCustContactsInputObjectZodSchema = makeSchema();
