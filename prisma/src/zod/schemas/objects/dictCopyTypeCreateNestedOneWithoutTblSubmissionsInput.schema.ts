import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeCreateWithoutTblSubmissionsInput.schema';
import { dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema as dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeUncheckedCreateWithoutTblSubmissionsInput.schema';
import { dictCopyTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema as dictCopyTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema } from './dictCopyTypeCreateOrConnectWithoutTblSubmissionsInput.schema';
import { dictCopyTypeWhereUniqueInputObjectSchema as dictCopyTypeWhereUniqueInputObjectSchema } from './dictCopyTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => dictCopyTypeCreateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => dictCopyTypeUncheckedCreateWithoutTblSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => dictCopyTypeCreateOrConnectWithoutTblSubmissionsInputObjectSchema).optional(),
  connect: z.lazy(() => dictCopyTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const dictCopyTypeCreateNestedOneWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.dictCopyTypeCreateNestedOneWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.dictCopyTypeCreateNestedOneWithoutTblSubmissionsInput>;
export const dictCopyTypeCreateNestedOneWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
