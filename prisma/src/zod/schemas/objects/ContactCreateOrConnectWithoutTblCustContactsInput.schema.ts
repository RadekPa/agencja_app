import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactCreateWithoutTblCustContactsInputObjectSchema as ContactCreateWithoutTblCustContactsInputObjectSchema } from './ContactCreateWithoutTblCustContactsInput.schema';
import { ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema as ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './ContactUncheckedCreateWithoutTblCustContactsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ContactWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ContactCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema)])
}).strict();
export const ContactCreateOrConnectWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.ContactCreateOrConnectWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateOrConnectWithoutTblCustContactsInput>;
export const ContactCreateOrConnectWithoutTblCustContactsInputObjectZodSchema = makeSchema();
