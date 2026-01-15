import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateWithoutTblCustContactsInputObjectSchema as ContactCreateWithoutTblCustContactsInputObjectSchema } from './ContactCreateWithoutTblCustContactsInput.schema';
import { ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema as ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './ContactUncheckedCreateWithoutTblCustContactsInput.schema';
import { ContactCreateOrConnectWithoutTblCustContactsInputObjectSchema as ContactCreateOrConnectWithoutTblCustContactsInputObjectSchema } from './ContactCreateOrConnectWithoutTblCustContactsInput.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutTblCustContactsInputObjectSchema).optional(),
  connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional()
}).strict();
export const ContactCreateNestedOneWithoutTblCustContactsInputObjectSchema: z.ZodType<Prisma.ContactCreateNestedOneWithoutTblCustContactsInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactCreateNestedOneWithoutTblCustContactsInput>;
export const ContactCreateNestedOneWithoutTblCustContactsInputObjectZodSchema = makeSchema();
