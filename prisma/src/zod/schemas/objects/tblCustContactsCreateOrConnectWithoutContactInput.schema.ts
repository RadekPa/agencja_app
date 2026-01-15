import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustContactsWhereUniqueInputObjectSchema as tblCustContactsWhereUniqueInputObjectSchema } from './tblCustContactsWhereUniqueInput.schema';
import { tblCustContactsCreateWithoutContactInputObjectSchema as tblCustContactsCreateWithoutContactInputObjectSchema } from './tblCustContactsCreateWithoutContactInput.schema';
import { tblCustContactsUncheckedCreateWithoutContactInputObjectSchema as tblCustContactsUncheckedCreateWithoutContactInputObjectSchema } from './tblCustContactsUncheckedCreateWithoutContactInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustContactsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustContactsCreateWithoutContactInputObjectSchema), z.lazy(() => tblCustContactsUncheckedCreateWithoutContactInputObjectSchema)])
}).strict();
export const tblCustContactsCreateOrConnectWithoutContactInputObjectSchema: z.ZodType<Prisma.tblCustContactsCreateOrConnectWithoutContactInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustContactsCreateOrConnectWithoutContactInput>;
export const tblCustContactsCreateOrConnectWithoutContactInputObjectZodSchema = makeSchema();
