import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ContactCreateWithoutTblCustContactsInputObjectSchema as ContactCreateWithoutTblCustContactsInputObjectSchema } from './ContactCreateWithoutTblCustContactsInput.schema';
import { ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema as ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema } from './ContactUncheckedCreateWithoutTblCustContactsInput.schema';
import { ContactCreateOrConnectWithoutTblCustContactsInputObjectSchema as ContactCreateOrConnectWithoutTblCustContactsInputObjectSchema } from './ContactCreateOrConnectWithoutTblCustContactsInput.schema';
import { ContactUpsertWithoutTblCustContactsInputObjectSchema as ContactUpsertWithoutTblCustContactsInputObjectSchema } from './ContactUpsertWithoutTblCustContactsInput.schema';
import { ContactWhereUniqueInputObjectSchema as ContactWhereUniqueInputObjectSchema } from './ContactWhereUniqueInput.schema';
import { ContactUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema as ContactUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema } from './ContactUpdateToOneWithWhereWithoutTblCustContactsInput.schema';
import { ContactUpdateWithoutTblCustContactsInputObjectSchema as ContactUpdateWithoutTblCustContactsInputObjectSchema } from './ContactUpdateWithoutTblCustContactsInput.schema';
import { ContactUncheckedUpdateWithoutTblCustContactsInputObjectSchema as ContactUncheckedUpdateWithoutTblCustContactsInputObjectSchema } from './ContactUncheckedUpdateWithoutTblCustContactsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ContactCreateWithoutTblCustContactsInputObjectSchema), z.lazy(() => ContactUncheckedCreateWithoutTblCustContactsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ContactCreateOrConnectWithoutTblCustContactsInputObjectSchema).optional(),
  upsert: z.lazy(() => ContactUpsertWithoutTblCustContactsInputObjectSchema).optional(),
  connect: z.lazy(() => ContactWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ContactUpdateToOneWithWhereWithoutTblCustContactsInputObjectSchema), z.lazy(() => ContactUpdateWithoutTblCustContactsInputObjectSchema), z.lazy(() => ContactUncheckedUpdateWithoutTblCustContactsInputObjectSchema)]).optional()
}).strict();
export const ContactUpdateOneRequiredWithoutTblCustContactsNestedInputObjectSchema: z.ZodType<Prisma.ContactUpdateOneRequiredWithoutTblCustContactsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ContactUpdateOneRequiredWithoutTblCustContactsNestedInput>;
export const ContactUpdateOneRequiredWithoutTblCustContactsNestedInputObjectZodSchema = makeSchema();
