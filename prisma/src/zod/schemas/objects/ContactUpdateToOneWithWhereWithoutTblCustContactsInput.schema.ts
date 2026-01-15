import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereInputObjectSchema as ContactWhereInputObjectSchema } from './ContactWhereInput.schema';
import { ContactUpdateWithoutTblCustContactsInputObjectSchema as ContactUpdateWithoutTblCustContactsInputObjectSchema } from './ContactUpdateWithoutTblCustContactsInput.schema';
import { ContactUncheckedUpdateWithoutTblCustContactsInputObjectSchema as ContactUncheckedUpdateWithoutTblCustContactsInputObjectSchema } from './ContactUncheckedUpdateWithoutTblCustContactsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ContactUpdateWithoutTblCustContactsInputObjectSchema), z.lazy(() => ContactUncheckedUpdateWithoutTblCustContactsInputObjectSchema)])
}).strict();
export const ContactUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.ContactUpdateToOneWithWhereWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpdateToOneWithWhereWithoutTblCustContactsInput>;
export const ContactUpdateToOneWithWhereWithoutTblCustContactsInputObjectZodSchema = makeSchema();
