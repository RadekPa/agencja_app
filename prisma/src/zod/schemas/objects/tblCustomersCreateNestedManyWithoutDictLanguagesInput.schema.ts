import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutDictLanguagesInputObjectSchema as tblCustomersCreateWithoutDictLanguagesInputObjectSchema } from './tblCustomersCreateWithoutDictLanguagesInput.schema';
import { tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema as tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema } from './tblCustomersUncheckedCreateWithoutDictLanguagesInput.schema';
import { tblCustomersCreateOrConnectWithoutDictLanguagesInputObjectSchema as tblCustomersCreateOrConnectWithoutDictLanguagesInputObjectSchema } from './tblCustomersCreateOrConnectWithoutDictLanguagesInput.schema';
import { tblCustomersCreateManyDictLanguagesInputEnvelopeObjectSchema as tblCustomersCreateManyDictLanguagesInputEnvelopeObjectSchema } from './tblCustomersCreateManyDictLanguagesInputEnvelope.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersCreateWithoutDictLanguagesInputObjectSchema).array(), z.lazy(() => tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => tblCustomersCreateOrConnectWithoutDictLanguagesInputObjectSchema), z.lazy(() => tblCustomersCreateOrConnectWithoutDictLanguagesInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => tblCustomersCreateManyDictLanguagesInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => tblCustomersWhereUniqueInputObjectSchema), z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const tblCustomersCreateNestedManyWithoutDictLanguagesInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateNestedManyWithoutDictLanguagesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateNestedManyWithoutDictLanguagesInput>;
export const tblCustomersCreateNestedManyWithoutDictLanguagesInputObjectZodSchema = makeSchema();
